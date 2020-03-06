import { startApp, whenDOMIsReady } from '@/utils/start';
import NewUser from '@/components/NewUser';

whenDOMIsReady(data => startApp(NewUser, data));
