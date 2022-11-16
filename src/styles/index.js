import { extendTheme } from '@chakra-ui/react';

// Foundations Styles
import config from '@/styles/foundations/config';
import fonts from '@/styles/foundations/fonts';
import fontWeights from '@/styles/foundations/fontWeights';

const theme = extendTheme({
	config,
	fonts,
	fontWeights,
});

export default theme;
