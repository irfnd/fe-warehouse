const allowedFile = { 'image/jpg': ['.jpg'], 'image/png': ['.png'] };

const dropzoneOptions = (onDrop) => ({
	onDrop,
	multiple: false,
	maxFiles: 1,
	maxSize: 1 * 100000,
	accept: allowedFile,
	noClick: false,
	noKeyboard: false,
});

export default dropzoneOptions;
