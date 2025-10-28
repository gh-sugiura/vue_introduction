import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import App from "@/App.vue";


describe(
    "App.vueのテスト",
    () => {
        test(
            "初期値での画面表示テスト",
            () => {
                const wrapper = mount(App);
                const actual = wrapper.get(`[data-testid="answer"]`).text();
                const expected = "2";
                expect(actual).toBe(expected);
            }
        );


        test(
            "分母8分子2での画面表示テスト",
            async () => {
                const wrapper = mount(App);
                await wrapper.get(`[data-testid="num1"]`).setValue(8);
                await wrapper.get(`[data-testid="num2"]`).setValue(2);
                const actual = wrapper.get(`[data-testid="answer"]`).text();
                const expected = "4";
                expect(actual).toBe(expected);
            }
        );


        test(
            "隠し領域非表示の画面表示テスト",
            () => {
                const wrapper = mount(App);
                const actual = wrapper.find(`[data-testid="invisible"]`).exists();
                const expected = false;
                expect(actual).toBe(expected);
            }
        );


        test(
            "隠し領域表示の画面表示テスト",
            async () => {
                const wrapper = mount(App);
                await wrapper.get(`[data-testid="showButton"]`).trigger("click");
                const actual = wrapper.find(`[data-testid="invisible"]`).exists();
                const expected = true;
                expect(actual).toBe(expected);
            }
        );
    }
);
