import { defineStore } from 'pinia';
import type { Member } from "@/stores/interfaces"


interface State {
    memberList: Map<number, Member>;
};


export const useMembersStore = defineStore("members",{
    state: (): State => {
        return {
            memberList: new Map<number, Member>()
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
        prepareMemberList(): void {
            let memberList = new Map<number, Member>();
            const memberListJSONStr = sessionStorage.getItem("memberList");
            if (memberListJSONStr != undefined) {
                const memberListJSON = JSON.parse(memberListJSONStr);
                memberList = new Map<number, Member>(memberListJSON);
            }
            this.memberList = memberList;
        },

        insertMember(member: Member): void {
            this.memberList.set(member.id, member);
            const memberListJSONStr = JSON.stringify([...this.memberList]);
            sessionStorage.setItem("memberList", memberListJSONStr);
        },

        // initList(): void {
        //     this.memberList.set(33456, { id: 33456, name: "田中", email: "tanaka@example.com", points: 35, note: "初回特典あり" });
        //     this.memberList.set(47783, { id: 47783, name: "鈴木", email: "suzuki@example.com", points: 53 });
        //     this.memberList.set(53625, { id: 53625, name: "伊藤", email: "ito@example.com", points: 80 });
        // },
        // registerMember(member: Member): void {
        //     this.memberList.set(member.id, member);
        // },
    }
});
