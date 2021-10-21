import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string,
            yellow: string,
            pink: string,

            background: string,
            details: string,
            fontContrast: string,
            label: string,
            placeholder: string,
            form: string,

            title: string,
            font: string,
            unimportant: string,
        }
    }
}