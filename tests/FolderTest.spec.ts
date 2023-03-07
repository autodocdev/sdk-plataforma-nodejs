import { Folder } from './../src/Folder';

jest.mock('../src/Config');

describe('Folder class', () => {

  let folder: Folder;

  beforeEach(() => {
    folder = new Folder();
  });

  it('create - should create new folder', async () => {
    const result = await folder
      .withUrl('http://host.example/v1/folders')
      .withAuthorization('638deb9fcf891c28f0c75ace')
      .create({ name: 'folder name', parent_id: 'c28f0c75ace' });

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('getById - should get folder By Id', async () => {
    const result = await folder
      .withUrl('http://host.example/v1/folders')
      .withAuthorization('638deb9fcf891c28f0c75ace')
      .getById('63174c6580e4d9ac7946d953');

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('update - should update one folder', async () => {
    const result = await folder
      .withUrl('http://host.example/v1/folders')
      .withAuthorization('638deb9fcf891c28f0c75ace')
      .update(
        '63174c6580e4d9ac7946d953',
        {
          name: 'Project A',
          parent_id: '0001',
        },
      );

    expect(result).toBeDefined();
    expect('204').toEqual(result.code);
  });

  it('delete - should delete one folder', async () => {
    const result = await folder
      .withUrl('http://host.example/v1/folders')
      .withAuthorization('638deb9fcf891c28f0c75ace')
      .delete('0001');

    expect(result).toBeDefined();
    expect('204').toBe(result.code);
  });

  it('create - should create file inside a folder', async () => {
    const result = await folder
      .withUrl('http://host.example/v1/folders')
      .withAuthorization('638deb9fcf891c28f0c75ace')
      .createFile('63174c6580e4d9ac7946d953', {name: 'example-1.pdf'});

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('getById - should get a file from a given directory', async () => {
    const result = await folder
      .withUrl('http://host.example/v1/folders')
      .withAuthorization('638deb9fcf891c28f0c75ace')
      .getFileById('63174c6580e4d9ac7946d953', '74c6587946631d9530e4d9ac' );

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('update - should update a file from a folder', async () => {
    const result = await folder
      .withUrl('http://host.example/v1/folders')
      .withAuthorization('638deb9fcf891c28f0c75ace')
      .updateFile(
        '63174c6580e4d9ac7946d953',
        '580e46d9ac763174c94d9536',
        {
          name: 'Project ABC',
          folders_id: '0002',
        },
      );

    expect(result).toBeDefined();
    expect('204').toEqual(result.code);
  });

  it('update - should update a file from a folder without folders_id', async () => {
    const result = await folder
      .withUrl('http://host.example/v1/folders')
      .withAuthorization('638deb9fcf891c28f0c75ace')
      .updateFile(
        '63174c6580e4d9ac7946d953',
        '580e46d9ac763174c94d9536',
        {
          name: 'Project ABC'
        },
      );

    expect(result).toBeDefined();
    expect('204').toEqual(result.code);
  });

  it('delete - should delete a file from a folder', async () => {
    const result = await folder
      .withUrl('http://host.example/v1/folders')
      .withAuthorization('638deb9fcf891c28f0c75ace')
      .deleteFile('63174c6580e4d9ac7946d953', '580e46d9ac763174c94d9536');

    expect(result).toBeDefined();
    expect('204').toBe(result.code);
  });

});
