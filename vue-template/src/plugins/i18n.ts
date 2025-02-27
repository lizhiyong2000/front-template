
import { createI18n } from 'vue-i18n';

import zh from '@/language/zh'
import en from '@/language/en'

const messages = {
    en,
    zh
}


export default createI18n({
    legacy: false,  // 设置为 false，启用 composition API 模式
    messages,
    locale: 'zh'  // 设置默认语言
})