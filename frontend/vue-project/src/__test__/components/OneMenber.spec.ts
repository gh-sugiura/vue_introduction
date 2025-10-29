import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import OneMember from '@/components/OneMember.vue';

describe("OneMember.vueのテスト",
    () => {
        test("備考データがある場合のPropsの表示テスト",
            () => {
                const propsData = {
                    id: 1,
                    name: "田中",
                    email: "tanaka@example.com",
                    points: 35,
                    note: "初回特典あり",
                };
                const wrapper = mount(OneMember, { props: propsData });
                const actualText = wrapper.text();
                expect(actualText).toContain(String(propsData.id));
                expect(actualText).toContain(propsData.name);
                expect(actualText).toContain(propsData.email);
                expect(actualText).toContain(String(propsData.points));
                expect(actualText).toContain(propsData.note);
            }
        );

        test("備考データがない場合のPropsの表示テスト",
            () => {
                const propsData = {
                    id: 2,
                    name: "鈴木",
                    email: "suzuki@example.com",
                    points: 53,
                };
                const wrapper = mount(OneMember, { props: propsData });
                const actualText = wrapper.text();
                expect(actualText).toContain(String(propsData.id));
                expect(actualText).toContain(propsData.name);
                expect(actualText).toContain(propsData.email);
                expect(actualText).toContain(String(propsData.points));
                expect(actualText).toContain("-----");
            }
        );
    }
);
