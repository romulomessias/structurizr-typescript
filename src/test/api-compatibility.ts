import { expect } from "chai";
import { StructurizrClient } from "../lib";
import { workspace } from "./workspace";

export async function testApiCompatitbility() {
    var client = new StructurizrClient(process.env.STRUCTURIZR_API_KEY!, process.env.STRUCTURIZR_API_SECRET!);
    const resultJson = await client.putWorkspace(parseInt(process.env.STRUCTURIZR_WORKSPACE_ID!, 10), workspace);
    const result = JSON.parse(resultJson);
    expect(result.success).to.be.true;
    expect(result.message).to.equal("OK");
}