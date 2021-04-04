import {
  Center,
  Checkbox,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
  Text,
  SimpleGrid,
  CheckboxGroup,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import PermissionDisplay from "../components/PermissionDisplay";
import ToggleButton from "../components/ToggleButton";
import { PermissionLoggingOptions } from "../models/permissionLoggingOptions";
import { PermissionModel } from "../models/permissionModel";
import { PermissionResult } from "../models/permissionResult";
import PermissionService from "../services/permissionService";

const IndexPage = () => {
  const permissionService = new PermissionService();
  const [
    permissionResult,
    setPermissionResult,
  ] = React.useState<PermissionResult | null>(null);

  useEffect(() => {
    const newPerms = { ...perms };
    updatePermission(newPerms);
  }, []);

  const handleOutputChange = (key: string) => {
    const newPerms = { ...perms };
    newPerms.logging =
      PermissionLoggingOptions[key as keyof typeof PermissionLoggingOptions];
    updatePermission(newPerms);
  };

  const [perms, setPerms] = React.useState<PermissionModel>({
    owner: [0, 0, 0],
    group: [0, 0, 0],
    all: [0, 0, 0],
    setgid: false,
    setuid: false,
    stickybit: false,
    fileOptions: {
      folderOptions: {
        recursive: false,
        preserveRoot: false,
      },
      referenceFile: "",
    },
    logging: PermissionLoggingOptions.Default,
  });

  const handlePermChange = (event: any, index: number) => {
    const newPerms = { ...perms };
    newPerms[event.target.name][index] = Number(event.target.checked);
    updatePermission(newPerms);
  };

  const handleModeChange = (event: any) => {
    const newPerms = { ...perms } as PermissionModel;
    newPerms[event.target.name] = event.target.checked;
    updatePermission(newPerms);
  };

  const handleRecursionChange = (event: any) => {
    const newPerms = { ...perms };
    newPerms.fileOptions.folderOptions.recursive = event.target.checked;

    if (
      newPerms.fileOptions.folderOptions.preserveRoot &&
      !event.target.checked
    ) {
      newPerms.fileOptions.folderOptions.preserveRoot = false;
    }

    updatePermission(newPerms);
  };

  const handlePreserveRootChange = (event: any) => {
    const newPerms = { ...perms };
    newPerms.fileOptions.folderOptions.preserveRoot = event.target.checked;

    updatePermission(newPerms);
  };

  const updatePermission = (value: PermissionModel) => {
    setPermissionResult(permissionService.computeResult(value));
    setPerms(value);
  };

  const handleFileReference = (event: any) => {
    const newPerms = { ...perms };

    if (event.target.checked) {
      // code to be added.
    } else {
      newPerms.fileOptions.folderOptions.preserveRoot = event.target.checked;
    }
    updatePermission(newPerms);
  };

  const tableVarient = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });

  return (
    <Layout title="chmod calculator | Open Web Tools">
      <Table variant="simple" size={tableVarient}>
        <TableCaption placement="top">
          A free utility to calculate the numeric (octal) or symbolic value for
          a file or folder permissions to use with chmod command
        </TableCaption>
        <Thead>
          <Tr>
            <Th>
              <Center>Permissions</Center>
            </Th>
            <Th>
              <Center>Owner</Center>
            </Th>
            <Th>
              <Center>Group</Center>
            </Th>
            <Th>
              <Center>Others</Center>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Center>Read</Center>
            </Td>
            <Td>
              <Center>
                <Checkbox
                  isChecked={Boolean(perms.owner[0])}
                  name="owner"
                  size="lg"
                  onChange={(e) => handlePermChange(e, 0)}
                ></Checkbox>
              </Center>
            </Td>
            <Td>
              <Center>
                <Checkbox
                  isChecked={Boolean(perms.group[0])}
                  name="group"
                  size="lg"
                  onChange={(e) => handlePermChange(e, 0)}
                ></Checkbox>
              </Center>
            </Td>
            <Td>
              <Center>
                <Checkbox
                  isChecked={Boolean(perms.all[0])}
                  name="all"
                  size="lg"
                  onChange={(e) => handlePermChange(e, 0)}
                ></Checkbox>
              </Center>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Center>Write</Center>
            </Td>
            <Td>
              <Center>
                <Checkbox
                  isChecked={Boolean(perms.owner[1])}
                  name="owner"
                  size="lg"
                  onChange={(e) => handlePermChange(e, 1)}
                ></Checkbox>
              </Center>
            </Td>
            <Td>
              <Center>
                <Checkbox
                  isChecked={Boolean(perms.group[1])}
                  name="group"
                  size="lg"
                  onChange={(e) => handlePermChange(e, 1)}
                ></Checkbox>
              </Center>
            </Td>
            <Td>
              <Center>
                <Checkbox
                  isChecked={Boolean(perms.all[1])}
                  name="all"
                  size="lg"
                  onChange={(e) => handlePermChange(e, 1)}
                ></Checkbox>
              </Center>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Center>Update</Center>
            </Td>
            <Td>
              <Center>
                <Checkbox
                  isChecked={Boolean(perms.owner[2])}
                  name="owner"
                  size="lg"
                  onChange={(e) => handlePermChange(e, 2)}
                ></Checkbox>
              </Center>
            </Td>
            <Td>
              <Center>
                <Checkbox
                  isChecked={Boolean(perms.group[2])}
                  name="group"
                  size="lg"
                  onChange={(e) => handlePermChange(e, 2)}
                ></Checkbox>
              </Center>
            </Td>
            <Td>
              <Center>
                <Checkbox
                  isChecked={Boolean(perms.all[2])}
                  name="all"
                  size="lg"
                  onChange={(e) => handlePermChange(e, 2)}
                ></Checkbox>
              </Center>
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <Center m={8}>
        <PermissionDisplay permission={permissionResult}></PermissionDisplay>
      </Center>
      <SimpleGrid spacing={8} columns={2}>
        <VStack align="center">
          <Text>Special Modes</Text>
          <VStack align="left">
            <CheckboxGroup size="lg">
              <Checkbox
                isChecked={perms.setuid}
                onChange={handleModeChange}
                name="setuid"
              >
                setuid
              </Checkbox>
              <Checkbox
                checked={perms.setgid}
                onChange={handleModeChange}
                name="setgid"
              >
                setgid
              </Checkbox>
              <Checkbox
                checked={perms.stickybit}
                onChange={handleModeChange}
                name="stickybit"
              >
                stickybit
              </Checkbox>
            </CheckboxGroup>
          </VStack>
        </VStack>
        <VStack>
          <Text>File Options</Text>
          <VStack align="left">
            <CheckboxGroup size="lg" colorScheme="blue">
              <Checkbox
                isChecked={perms.fileOptions.folderOptions.recursive}
                onChange={handleRecursionChange}
              >
                Recursive
              </Checkbox>
              <Checkbox
                isChecked={perms.fileOptions.folderOptions.preserveRoot}
                isDisabled={!perms.fileOptions.folderOptions.recursive}
                onChange={handlePreserveRootChange}
              >
                Preserve Root
              </Checkbox>
              {/* 
              // To be introduced later
              <Checkbox
                isChecked={Boolean(perms.fileOptions.referenceFile)}
                isDisabled={true}
                onChange={handleFileReference}
              >
                File Reference
              </Checkbox> */}
            </CheckboxGroup>
          </VStack>
        </VStack>
      </SimpleGrid>
      <Center m={8}>
        <ToggleButton
          items={["Default", "Verbose", "Changes", "Silent"]}
          initial="Default"
          size="sm"
          onToggle={handleOutputChange}
        ></ToggleButton>
      </Center>
    </Layout>
  );
};

export default IndexPage;
