import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            fontFamily: {
                'cairo': ['Cairo', 'sans-serif'],
                'open-sans': ['Open Sans', 'sans-serif'],
                'playwrite': ['Playwrite MX', 'cursive'],
                'roboto-mono': ['Roboto Mono', 'monospace'],
            },
        },
    }
}
