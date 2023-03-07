import {
    Box,
    Flex,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Text,
    Heading,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';

import InfoCard from '@components/Contacts/lead-info/InfoCard';
import EmailCard from '@components/Contacts/email/EmailCard';
import SMSCard from '@components/Contacts/sms/SMSCard';
import Clients from '@components/Contacts/clients/Clients';

const Contacts = () => {
    const [selectedClient, setSelectedClient] = useState();
    const [selectedClientId, setSelectedClientId] = useState();

    const handleClientClick = (clientId, client) => {
        setSelectedClientId(clientId);
        setSelectedClient(client);
    };

    const color = useColorModeValue('gray.100', 'gray.700');
    return (
        <Flex px={10} height={'90vh'} maxHeight={'90vh'}>
            <Flex
                height={'100%'}
                justifyContent={'space-between'}
                gap={5}
                flexGrow={1}>
                <Card height={'100%'} width={'20rem'} flexShrink={0} bg={color}>
                    <CardHeader>
                        <Heading>Contacts</Heading>
                    </CardHeader>
                    <CardBody>
                        <Clients
                            selectedClientId={selectedClientId}
                            handleClientClick={handleClientClick}
                        />
                    </CardBody>
                </Card>
                <Flex flexGrow={1} flexDirection={'column'} gap={5}>
                    <InfoCard selectedClient={selectedClient} />
                    <Flex flexGrow={1} gap={5}>
                        <EmailCard />
                        <SMSCard />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Contacts;
