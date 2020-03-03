import { startApp, whenDOMIsReady } from '@/utils/start';
import Home from '@/components/Home';

whenDOMIsReady(data => startApp(Home, data));
