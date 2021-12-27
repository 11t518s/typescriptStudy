{
  type SuccessState = {
    result: "success";
  };

  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "donw" | "timeout";
  };

  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConnect(): ResultState {
      throw new Error("no network");
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      {
        this.client.tryConnect();
      }
    }
  }

  class App {
    constructor(private userService: UserService) {}

    run() {
      try {
        this.userService.login();
      } catch (error) {
        console.log("catchedffef");
      }
    }
  }

  const client = new NetworkClient();

  const service = new UserService(client);

  const app = new App(service);

  app.run();
}
