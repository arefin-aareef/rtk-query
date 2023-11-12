import React from 'react';
import {
	useGetAllProductsQuery,
	useGetProductQuery,
} from '../store/slices/apiSlice';
import { Flex, Text } from '@chakra-ui/react';
const Data = () => {
	const {
		data: allProductsData,
		error,
		isError,
		isLoading,
	} = useGetAllProductsQuery({});
	const { data: singleProductData } = useGetProductQuery('iphone');
	console.log('data', allProductsData);

	return (
		<Flex direction='column'>
			{isLoading && <Text fontSize='200px'>Loading...</Text>}
			{allProductsData?.products?.map((item: any) => (
        
					<div key={item._id}> {item.title} </div>
      ))}
		</Flex>
	);
};

export default Data;
