import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import OneMember from '@/components/OneMember.vue';


describe("App.vueのテスト",
    () => {
        test("全会員の保有ポイントの合計の表示テスト",
            () => {
                const options = {
                    global: {
                        stubs: { OneMember: true }
                    }
                };
                const wrapper = mount(App, options);
                const actualText = wrapper.text();
                const expected = "全会員の保有ポイントの合計: 168";
                expect(actualText).toContain(expected);
            }
        );

        test("emitメソッドのテスト",
            async () => {
                const options = {
                    global: {
                        stubs: { OneMember: true }
                    }
                };
                const wrapper = mount(App, options);
                const oneMemberComponent = wrapper.findComponent(OneMember);
                await oneMemberComponent.vm.$emit("incrementPoint", 1);
                const actualText = wrapper.text();
                const expected = "全会員の保有ポイントの合計: 169";
                expect(actualText).toContain(expected);
            }
        );
    }
);
