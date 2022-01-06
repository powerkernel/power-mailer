/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

export default app;
