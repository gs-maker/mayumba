import { Box } from "@chakra-ui/react";

const Footer = () => {
	return (
		<Box textAlign="center" p="5" color="grey.600" borderTop="1px" borderColor="grey.600">
			{new Date().getFullYear()} &copy; <p>Mayumba.com Inc.</p>
		</Box>
	);
};

export default Footer;
