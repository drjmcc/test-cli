import { Command, Flags } from "@oclif/core";
import axios from "axios";
import open from "open";
import { v4 as uuidv4 } from "uuid";

// import axios from "axios";
export interface Response {
  apiKey: string;
  authHeader: string;
  orgId: string;
}

export default class Auth extends Command {
  static description = "Say hello";

  static examples = [
    `$ oex hello friend 
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ];

  static flags = {
    from: Flags.string({
      char: "f",
      description: "Whom is saying hello",
      required: false,
    }),
  };

  static args = [
    { name: "person", description: "Person to say hello to", required: false },
  ];

  sleep = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  async run(): Promise<void> {
    // const { args, flags } = await this.parse(Auth);
    const token = uuidv4();
    const url = `https://practical-hamilton-a1d810.netlify.app/?token=${token}`;
    await open(url, {
      app: { name: "firefox" },
    });

    const instance = axios.create({
      baseURL: "https://ryaas8kom1.execute-api.eu-west-1.amazonaws.com/",
      timeout: 2000,
      headers: { "Content-Type": "application/json" },
    });

    this.log(
      `Now redirecting you to our auth page, go ahead and log in!
      If you can't wait use this url:
      ${url}`
    );

    while (true) {
      try {
        const result = await instance.post(
          "/auth/credentials",
          {
            token: token,
          },
          { validateStatus: () => true }
        );

        this.log(result.status.toString());
        this.sleep(4000);
        if (result.status === 200) {
          this.log(result.data);
          break;
        }
      } finally {
      }
    }
  }
}
