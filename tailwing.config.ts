import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            aspectRatio: {
                auto: 'auto',
                square: '1 / 1',
                video: '16 / 9'
            },
            fontFamily: {
                'cairo': ['Cairo Play', 'sans-serif'],
                'playwrite': ['Playwrite MX', 'cursive']
            },
        },
    }
}
