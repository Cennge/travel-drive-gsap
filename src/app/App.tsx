import { AppRouter } from './routers/AppRouter';
import { SmoothScroll } from './providers/SmoothScroll';

export const App = () => {
    return (
        <SmoothScroll>
            <AppRouter />
        </SmoothScroll>
    );
};