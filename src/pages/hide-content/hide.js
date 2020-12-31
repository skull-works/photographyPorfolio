import React from 'react';

const HideContent = () => {
	return (
		<>
			<title>Gualbertsan Sual</title>
			<header>
                <div className="w-hull h-100vh flex flex-wrap justify-center content-center">
					<div className="w-8/12 sm:w-64 xl:w-56 h-full flex flex-col justify-center">
						<div className="pt-16 sm:pt-0 lg:pt-20 mx-auto">
							<img
								className="object-contain"
								src={require('../../images/LOGO2.png')}
								alt="logo"
							/>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default HideContent;
