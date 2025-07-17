// A smart Node.js script to inspect an API endpoint and generate a TS interface.
// It automatically handles different levels of data nesting.

// --- Instructions ---
// 1. Change the API_URL to the endpoint you want to inspect.
// 2. Change the INTERFACE_NAME to what you want the TypeScript interface to be called.
// 3. Run `node inspectApi.js` in your terminal.

const API_URL = "https://api.agcnewsnet.com/api/general/top-stories";
const INTERFACE_NAME = "Story"; // Change this for different endpoints, e.g., "Category"

async function inspectEndpoint() {
  console.log(`Fetching data from: ${API_URL}`);
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonResponse = await response.json();

    let dataArray = null;

    // The "smart" logic: Check for data in common nesting patterns
    if (Array.isArray(jsonResponse?.data?.data)) {
      console.log("✅ Found double-nested array at 'response.data.data'");
      dataArray = jsonResponse.data.data;
    } else if (Array.isArray(jsonResponse?.data)) {
      console.log("✅ Found single-nested array at 'response.data'");
      dataArray = jsonResponse.data;
    } else if (Array.isArray(jsonResponse)) {
      console.log("✅ Found array at the root of the response");
      dataArray = jsonResponse;
    }

    // Now validate if we found a usable array
    if (!dataArray || dataArray.length === 0) {
      console.error("\n❌ Could not find a usable array of objects in the response.");
      console.log("Full response for manual inspection:", JSON.stringify(jsonResponse, null, 2));
      return;
    }

    // Proceed with the first object from the found array
    const firstItem = dataArray[0];
    const keys = Object.keys(firstItem);

    console.log("\n🔑 Keys found in the first object:", keys);
    console.log(`\n📝 Generated TypeScript Interface (starting point for '${INTERFACE_NAME}'):\n`);

    // Generate the TypeScript interface string
    let interfaceString = `export interface ${INTERFACE_NAME} {\n`;
    keys.forEach(key => {
        const value = firstItem[key];
        let type = 'any'; // Default type

        if (typeof value === 'string') type = 'string';
        else if (typeof value === 'number') type = 'number';
        else if (typeof value === 'boolean') type = 'boolean';
        else if (value === null) type = 'any | null'; // Handle null values

        interfaceString += `  ${key}: ${type};\n`;
    });
    interfaceString += "}";

    console.log(interfaceString);

  } catch (error) {
    console.error("\n❌ Failed to inspect API:", error.message);
  }
}

inspectEndpoint();