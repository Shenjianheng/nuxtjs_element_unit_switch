import Vue from "vue"
import VueI18n from "vue-i18n"
import zh from "../i18n/zh"
import mx from "../i18n/mx"
import ind from "../i18n/in"
import en from "../i18n/en"
import de from "../i18n/de"

Vue.use(VueI18n)

export default ({app}) => {
    app.i18n = new VueI18n({
        locale: 'en',
        messages: {
            zh,
            mx,
            ind,
            en,
            de
        }
    })
}