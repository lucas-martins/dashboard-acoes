import { options } from "./GraphOptions"
export const colorsChart = (theme) => {
    if(theme === 'theme_light') {
        options.plugins.legend.labels.color = '#495057'
        options.scales.x.ticks.color = '#495057'
        options.scales.y.ticks.color = '#495057'
    } else {
        options.plugins.legend.labels.color = 'white'
        options.scales.x.ticks.color = 'white'
        options.scales.y.ticks.color = 'white'
    }
}