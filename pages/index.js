import App from "../components/App";
import { SocialButton } from "../components/ui/buttons";
import { BodyOne } from "../components/ui/Typography";
import { HeadingOne } from "../components/ui/Typography";
import { socialLinks } from "../constants";

// import { initializeApollo, addApolloState } from "../lib/apolloClient";

const IndexPage = () => {
  return (
    <App>
      <HeadingOne className="text-center  font-medium bg-clip-text my text-transparent bg-gradient-to-r from-gradient-three-colorB to-gradient-three-colorA flex justify-center mt-20 my-2 ">
        {" "}
        Welcome to SASI World
      </HeadingOne>
      <div>
        <BodyOne className=" mt-10 p-4 text-center">
          Finding the right visuals to use for your business can be a daunting
          task!
        </BodyOne>

        <BodyOne className=" mt-10 p-4 text-center">
          This is why we are creating SASI.
        </BodyOne>
        <BodyOne className=" mt-10 p-4 text-center">
          Content that is created to make your business stand out.
        </BodyOne>
        <BodyOne className=" mt-10 p-4 text-center">
          Finding the right visuals to use for your business can be a daunting
          task!
        </BodyOne>

        <BodyOne>This is why we are creating SASI.</BodyOne>

        <BodyOne>
          Content that is created to make your business stand out.
        </BodyOne>

        <BodyOne>
          Get access to empowering imagery that promotes realness and celebrate
          our unique differences.
        </BodyOne>
        <BodyOne>
          Sign up and we'll notify you as soon as you can download some Free
          Quality content! Get SASI imagery that speaks to your audience.
        </BodyOne>
        <BodyOne>
          An easier way of marketing your product and business with relevant
          content.
        </BodyOne>
      </div>

      <div className=" mt-12 p-3 flex justify-center">
        {socialLinks.map((link, index) => (
          <SocialButton className="mx-3 my-3" key={index}>
            <a
              className=" text-gray-800"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}{" "}
            </a>
          </SocialButton>
        ))}
      </div>
    </App>
  );
};

// export async function getStaticProps() {
//   const apolloClient = initializeApollo();

//   await apolloClient.query({
//     query: ALL_POSTS_QUERY,
//     variables: allPostsQueryVars,
//   });

//   return addApolloState(apolloClient, {
//     props: {},
//     revalidate: 1,
//   });
// }

export default IndexPage;
