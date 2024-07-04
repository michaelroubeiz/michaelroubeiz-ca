import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            fontFamily: {
                'cairo': ['Cairo Play', 'sans-serif'],
                'playwrite': ['Playwrite MX', 'cursive'],
                'roboto-mono': ['Roboto Mono', 'monospace'],
            },
            colors: {
                primary: '#dc2626'
            },
        },
    }
}
