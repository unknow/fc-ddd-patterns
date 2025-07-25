import Customer from "../entity/customer";
import Address from "../value-object/address";

describe("Customer integration tests", () => {
  it("should create a customer and dispatch CustomerCreated event", () => {
    // Spy on console.log
    const spyConsoleLog = jest.spyOn(console, "log");

    // Create a customer
    const customer = new Customer("123", "Customer 1");

    // Verify that the event handlers were called
    expect(spyConsoleLog).toHaveBeenCalledWith(
      "Esse é o primeiro console.log do evento: CustomerCreated"
    );
    expect(spyConsoleLog).toHaveBeenCalledWith(
      "Esse é o segundo console.log do evento: CustomerCreated"
    );

    // Restore console.log
    spyConsoleLog.mockRestore();
  });

  it("should change customer address and dispatch CustomerAddressChanged event", () => {
    // Spy on console.log
    const spyConsoleLog = jest.spyOn(console, "log");

    // Create a customer
    const customer = new Customer("123", "Customer 1");

    // Clear the spy to ignore the CustomerCreated event logs
    spyConsoleLog.mockClear();

    // Change the customer's address
    const address = new Address("Street 1", 123, "13330-250", "São Paulo");
    customer.changeAddress(address);

    // Verify that the event handler was called
    expect(spyConsoleLog).toHaveBeenCalledWith(
      `Endereço do cliente: 123, Customer 1 alterado para: ${address}`
    );

    // Restore console.log
    spyConsoleLog.mockRestore();
  });
});