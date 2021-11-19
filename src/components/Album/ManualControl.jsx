import React, { useState, forwardRef } from "react";

const ManualControl = forwardRef(({ page, item }, ref) => {
	const [PageNumber, setPageNumber] = useState("");
	return (
		<div className='flex rounded-md justify-evenly my-4'>
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
	);
});

ManualControl.displayName = "ManualControllerAlbumFlip";

export default ManualControl;
