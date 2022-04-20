import React, { FC } from 'react';
import AppBar from '../../components/AppBar';
import { Stack, HStack, Text, Avatar, Box, Button } from 'native-base';

interface Props {
  navigation: any;
}

const TopTraders: FC<Props> = ({ navigation }) => {
  const users = [
    {
      image:
        'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
      name: 'Neils Sims',
      email: 'email@gmail.com',
    },
    {
      image:
        'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
      name: 'Linder Hassinger',
      email: 'email@gmail.com',
    },
    {
      image:
        'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
      name: 'Juan Zapata',
      email: 'email@gmail.com',
    },
    {
      image:
        'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
      name: 'Carlos Suarez',
      email: 'email@gmail.com',
    },
    {
      image:
        'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
      name: 'Carlos Suarez',
      email: 'email@gmail.com',
    },
    {
      image:
        'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
      name: 'Carlos Suarez',
      email: 'email@gmail.com',
    },
    {
      image:
        'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
      name: 'Carlos Suarez',
      email: 'email@gmail.com',
    },
  ];

  return (
    <>
      <AppBar
        text="Top Traders"
        isBack={true}
        navigation={navigation}
        back="Home"
      />
      <Box bg="white.500" m={3} p={5} borderRadius={10}>
        <Stack space={7}>
          {users.map(user => (
            <HStack>
              <Stack direction="row">
                <Avatar
                  source={{
                    uri: user.image,
                  }}
                />
                <Stack ml={3}>
                  <Text fontWeight={600}>{user.name}</Text>
                  <Text fontSize="sm" color="textSecondary.500">
                    {user.email}
                  </Text>
                </Stack>
              </Stack>
              <Button onPress={() => navigation.goBack()} variant="ghost">
                Follow
              </Button>
            </HStack>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default TopTraders;
