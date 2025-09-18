import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "time-server",
  version: "1.0.0"
});

server.registerTool(
  "getTime",
  {
    title: "Get Time",
    description: "Returns the current date and time in ISO format",
    inputSchema: {}
  },
  async () => {
    const now = new Date().toISOString();
    return {
      content: [
        {
          type: "text",
          text: `Hello bro time is ${now}`
        }
      ]
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);

console.error("MCP server (time-server) running");
