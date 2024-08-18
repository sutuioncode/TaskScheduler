import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { render as nd, screen, fireEvent } from '@testing-library/react-native';

const render: typeof nd = (component, props) => {
    return nd(<GluestackUIProvider config={config} colorMode={'light'}>
        {component}
    </GluestackUIProvider>, props)
}

export { render, screen, fireEvent }