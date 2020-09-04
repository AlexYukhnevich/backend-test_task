import { app } from './app';
import { initDbConnection } from './services/db';
import { appConfig } from './config';
import { handleProcessErrors } from './errors/process-errors';

const { port } = appConfig;

initDbConnection();
app.listen(port, () => console.log(`Server has been started on port: ${port}`));    
handleProcessErrors();