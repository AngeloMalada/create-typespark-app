import React from 'react';
import { trpc } from '../utils/trpc';
import { NextPage } from 'next';
type Props = {};

const Home: NextPage = (props: Props) => {
	const {
		isLoading,
		error,
		data: holla,
	} = trpc.hello.useQuery({ text: 'Holla' });
	const hello = trpc.hello.useQuery({ text: 'Holla' });

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>{error.message}</div>;
	}
	return (
		<div className='h-screen flex justify-center items-center'>
			<h1 className=' text-center uppercase font-extrabold p-4 text-3xl tracking-widest indent-[0.1em] font-montserrat'>
				{holla}
			</h1>
		</div>
	);
};

export default Home;
