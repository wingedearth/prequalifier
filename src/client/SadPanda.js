import { startApp, whenDOMIsReady } from '@/utils/start';
import Disqualified from '@/components/Disqualified';

whenDOMIsReady(data => startApp(Disqualified, data));
