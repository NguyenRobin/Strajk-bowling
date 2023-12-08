import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { beforeAll, afterEach, afterAll } from 'vitest';

import { server } from '../src/mocks/server';

afterEach(() => cleanup());
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
