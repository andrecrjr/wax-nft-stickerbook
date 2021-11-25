import React, { useState, forwardRef, useEffect } from "react";
import { getCollectionSchemas } from "../../services";

const ManualControl = forwardRef(({ page, item }, ref) => {
	const [PageNumber, setPageNumber] = useState("");
	const [schemas, setSchemas] = useState([]);
	useEffect(() => {
		getCollectionSchemas();
	}, []);
	return (
		<div className='flex flex-col md:flex-row md:justify-around my-3'>
			<div className='flex rounded-md justify-evenly mb-5 md:mb-0 '>
				<button
					onClick={() => {
						ref.current.getPageFlip().turnToPage(1);
					}}
					className='bg-gradient-to-b to-mainPrimary from-mainSecondary rounded-md'
				>
					First Page
				</button>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						ref.current.getPageFlip().turnToPage(parseInt(PageNumber));
					}}
				>
					<input
						type='text'
						placeholder='Page number'
						onChange={(e) => {
							setPageNumber(e.target.value);
						}}
						className='w-10'
					/>
					<button
						type='submit'
						className='bg-gradient-to-t to-mainPrimary from-mainSecondary rounded-md ml-2'
						onClick={(e) => {
							e.preventDefault();
							ref.current.getPageFlip().turnToPage(parseInt(PageNumber));
						}}
					>
						Go
					</button>
				</form>
				<button
					onClick={() => {
						ref.current.getPageFlip().turnToPage(page.numberPages.length);
					}}
					className='bg-gradient-to-b to-mainPrimary from-mainSecondary rounded-md'
				>
					Last Page
				</button>
			</div>
			<select
				className='w-4/6 self-center md:w-1/6'
				onChange={(e) => {
					console.log(e.target.value);
				}}
			>
				<option defaultChecked>
					{process.env.REACT_APP_NAME_COLLECTION} schemas
				</option>
				<option value=''>CryptoMonkeys Traditional</option>
				<option>MonkeyStacks</option>
			</select>
		</div>
	);
});

ManualControl.displayName = "ManualControllerAlbumFlip";

export default ManualControl;
