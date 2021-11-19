import React, {
	useState,
	useCallback,
	memo,
	useContext,
	createRef,
} from "react";
import HTMLFlipBook from "react-pageflip";
import { Cover } from "./Cover";
import { Page } from "./Page";
import { getTemplate } from "../../services";
import { UserContext } from "../contexts";
import ManualControl from "./ManualControl";

export const AlbumContainer = memo(() => {
	const { userData, page } = useContext(UserContext);
	const [data, setData] = useState({});
	const controlData = createRef();
	const getTemplateFetch = useCallback((page) => {
		getTemplate(page.data, setData);
		getTemplate(page.data + 1, setData);
	}, []);

	return (
		<>
			<ManualControl ref={controlData} page={page} />
			<div className='container'>
				{page.numberPages.length > 0 && (
					<HTMLFlipBook
						width={320}
						height={480}
						maxHeight={480}
						showCover={true}
						swipeDistance={60}
						onFlip={getTemplateFetch}
						ref={(component) => (controlData.current = component)}
					>
						<div
							className='bg-gradient-to-bl to-mainPrimary 
					from-mainSecondary text-white h-full'
						>
							<Cover data={userData} />
						</div>
						{page.numberPages.map((_, index) => (
							<div
								className='flex flex-wrap bg-mainBackgroundColor'
								key={index}
							>
								<Page data={data[index]} user={userData.data} />
							</div>
						))}
						<div className='bg-mainGreen items-center h-full'>
							<p className='final--header text-white mt-5 text-center'>
								<br />
								<a href='https://discord.gg/yyQFSdEyEz'>
									Visit cryptoMonkeys Discord
								</a>
							</p>
							<p className='mt-auto text-xs break-words text-white'>
								Created with💓by Eroshi Solutions!
								ban_1eroshi3kz1ye9o6c6nxqu5zzfhxmc9mqugg9uf8nfk1nw5nnx6q5r66e3ke
							</p>
						</div>
					</HTMLFlipBook>
				)}
			</div>
		</>
	);
});
