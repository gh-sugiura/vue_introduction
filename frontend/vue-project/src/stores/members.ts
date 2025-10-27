import { defineStore } from 'pinia';
import type { Member } from "@/stores/interfaces"


interface State {
    memberList: Map<number, Member>;
    isLoading: boolean;
};


let _database: IDBDatabase;
async function getDatabase(): Promise<IDBDatabase> {
    const promise = new Promise<IDBDatabase>(
        (resolve, reject): void => {
            if (_database != undefined) {
                resolve(_database);
            } else {
                const request = window.indexedDB.open("asyncdb", 1);

                request.onupgradeneeded = (event): void => {
                    const target = event.target as IDBRequest;
                    const database = target.result as IDBDatabase;
                    database.createObjectStore("members", { keyPath: "id" });
                };

                request.onsuccess = (event): void => {
                    const target = event.target as IDBRequest;
                    _database = target.result as IDBDatabase;
                    resolve(_database);
                };

                request.onerror = (event): void => {
                    console.log("Error:IndexedDBのオープンに失敗しました", event);
                    reject(new Error("IndexedDBのオープンに失敗しました"));
                };
            }
        }
    );
    return promise;
};


export const useMembersStore = defineStore("members",{
    state: (): State => {
        return {
            memberList: new Map<number, Member>(),
            isLoading: true,
        };
    },

    getters: {
        getById: (state) => {
            return (id: number): Member => {
                const member = state.memberList.get(id) as Member;
                return member;
            };
        },

        isMemberListEmpty: (state): boolean => {
            return state.memberList.size === 0;
        },
    },

    actions: {
        async prepareMemberList(): Promise<boolean> {
            const database = await getDatabase();
            const promise = new Promise<boolean>(
                (resolve, reject): void => {
                    const transaction = database.transaction("members", "readonly");
                    const objectStore = transaction.objectStore("members");
                    const memberList = new Map<number, Member>();
                    const request = objectStore.openCursor();

                    request.onsuccess = (event): void => {
                        const target = event.target as IDBRequest;
                        const cursor = target.result as IDBCursorWithValue;
                        if (cursor) {
                            const id = cursor.key as number;
                            const member = cursor.value as Member;
                            memberList.set(id, member);
                            cursor.continue();
                        }
                    };

                    transaction.oncomplete = (): void => {
                        this.memberList = memberList;
                        this.isLoading = false;
                        resolve(true);
                    };
                    
                    transaction.onerror = (event): void => {
                        console.log("Error:データの取得に失敗しました", event);
                        this.isLoading = false;
                        reject(new Error("データの取得に失敗しました"));
                    };
                }
            );
            return promise;
        },

        
        async insertMember(member: Member): Promise<boolean> {
            const memberRegister: Member = {
                ...member
            };
            const database = await getDatabase();
            const promise = new Promise<boolean>(
                (resolve, reject): void => {
                    const transaction = database.transaction("members", "readwrite");
                    const objectStore = transaction.objectStore("members");
                    objectStore.put(memberRegister);

                    transaction.oncomplete = (): void => {
                        resolve(true);
                    };

                    transaction.onerror = (event): void => {
                        console.log("Error:データの登録に失敗しました", event);
                        reject(new Error("データの登録に失敗しました"));
                    };
                }
            );
            return promise;
        },

        // prepareMemberList(): void {
        //     let memberList = new Map<number, Member>();
        //     const memberListJSONStr = sessionStorage.getItem("memberList");
        //     if (memberListJSONStr != undefined) {
        //         const memberListJSON = JSON.parse(memberListJSONStr);
        //         memberList = new Map<number, Member>(memberListJSON);
        //     }
        //     this.memberList = memberList;
        // },

        // initList(): void {
        //     this.memberList.set(33456, { id: 33456, name: "田中", email: "tanaka@example.com", points: 35, note: "初回特典あり" });
        //     this.memberList.set(47783, { id: 47783, name: "鈴木", email: "suzuki@example.com", points: 53 });
        //     this.memberList.set(53625, { id: 53625, name: "伊藤", email: "ito@example.com", points: 80 });
        // },

        // registerMember(member: Member): void {
        //     this.memberList.set(member.id, member);
        // },

        // insertMember(member: Member): void {
        //     this.memberList.set(member.id, member);
        //     const memberListJSONStr = JSON.stringify([...this.memberList]);
        //     sessionStorage.setItem("memberList", memberListJSONStr);
        // },
    }
});
