import Image from "next/image";

const Loading = () => {
	return (
		<div className={ 'loaderWrapper' }>
			<Image className={ 'loader' } src={ '/loader.gif' } alt={ 'Загрузка...' } width={ 250 }
				   height={ 250 }/>
		</div>
	)
};

export default Loading;