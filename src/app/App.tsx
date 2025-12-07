import { AppRouter } from './routers/AppRouter';
import { SmoothScroll } from './providers/SmoothScroll';
import { Header } from '@widgets/header';

export const App = () => {
    return (
        <SmoothScroll>
            <Header />
            <AppRouter />
        </SmoothScroll>
    );
};