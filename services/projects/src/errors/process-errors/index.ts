export const handleProcessErrors = () => {
  process.on('uncaughtException', err => console.error('uncaughtException', err));
  process.on('unhandledRejection', err => console.error('unhandledRejection', err));
};