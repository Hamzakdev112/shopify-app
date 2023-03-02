import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";

export default function HomePage() {
  return (
    <Page narrowWidth>
      <TitleBar title="HAMZA's APP" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Stack
              wrap={false}
              spacing="extraTight"
              distribution="trailing"
              alignment="center"
            >
              <Stack.Item fill>
                <TextContainer spacing="loose">
                  <Heading>HAMZA</Heading>
                  <h1>THIS IS A TEST APP MADE BY ME</h1>
                </TextContainer>
              </Stack.Item>
              <Stack.Item>
                <div style={{ padding: "0 20px" }}>
                  <Image
                    source="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/332288699_721651856030754_7471408437934236465_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFkGSjR9uzNJxJc46dxvBIqJJvp-0EGudAkm-n7QQa50HS5E4qEtqZhEsv3c9Q2d3_QlXigeFPhLNgPlqkcTCDH&_nc_ohc=FinHjrOTLhEAX_DxgMm&tn=swXgwnRNu_ijXH29&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfD-jeyylg9v8Dn1wDAwZRBdUrOI1TZSJREb58SyYD54Nw&oe=63FE6426"
                    alt="Nice work on building a Shopify app"
                    width={120}
                  />
                </div>
              </Stack.Item>
            </Stack>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <ProductsCard />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
