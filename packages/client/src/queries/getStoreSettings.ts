import { client } from '../client';

export const getStoreSettings = async () => {
  const response = await client.query({
    site: {
      settings: {
        storeName: true,
        logoV2: {
          __typename: true,
          on_StoreTextLogo: {
            text: true,
          },
          on_StoreImageLogo: {
            image: {
              url: {
                __args: {
                  width: 155,
                },
              },
              altText: true,
            },
          },
        },
        contact: {
          address: true,
          email: true,
          phone: true,
        },
        socialMediaLinks: {
          name: true,
          url: true,
        },
      },
    },
  });

  return response.site.settings;
};