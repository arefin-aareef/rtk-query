'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { productsApi } from '../store/slices/apiSlice';

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={store}>
			<ApiProvider api={productsApi}>
				<CacheProvider>
					<ChakraProvider>{children}</ChakraProvider>
				</CacheProvider>
			</ApiProvider>
		</Provider>
	);
}
