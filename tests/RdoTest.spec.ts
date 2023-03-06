import { Rdo } from '../src/Rdo';

jest.mock('../src/Config');

describe('Rdo class', () => {

  let rdo: Rdo;

  beforeEach(() => {
    rdo = new Rdo();
  });

  it('all - should get all Rdo by specific group rdo company', async () => {
    const result = await rdo
      .withUrl('http://host.example/v1/rdo')
      .withAuthorization('14d8121463492256732d3dda')
      .withCustomer('56732d3dda14d81214634922')
      .all();

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('create - should create one new rdo', async () => {
    const result = await rdo
      .withUrl('http://host.example/v1/rdo')
      .withAuthorization('14d8121463492256732d3dda')
      .withCustomer('56732d3dda14d81214634922')
      .create({
        date: 'name teste',
        construction_id: 'description teste',
      });

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('getById - should get rdo By Id', async () => {
    const result = await rdo
      .withUrl('http://host.example/v1/rdo')
      .withCustomer('56732d3dda14d81214634922')
      .getById('56732d3dda14d81214634922');

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('calendar - should get specific Rdos in between selected month', async () => {
    const result = await rdo
      .withUrl('http://host.example/v1/rdo')
      .withAuthorization('14d8121463492256732d3dda463492256732d3dda')
      .withCustomer('56732d3dda14d812146349223dda14d81214634922')
      .calendar(
        '56732d3dda14d81214634922',
        '03',
        '2023',
      );

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('delete - should delete one rdo', async () => {
    const result = await rdo
      .withUrl('http://host.example/v1/rdo')
      .withAuthorization('14d8121463492256732d3dda463492256732d3dda')
      .withCustomer('56732d3dda14d81214634922')
      .delete('56732d3dda14d81214634922');

    expect(result).toBeDefined();
    expect('204').toBe(result.code);
  });

  it('updateStatus - should update the status of an RDO', async () => {
    const result = await rdo
      .withUrl('http://host.example/v1/rdo')
      .withAuthorization('14d8121463492256732')
      .withCustomer('56732d3dda14d81214634922')
      .updateStatus(
        'd3dda463492256732d3dda',
        {
          'rdo_id': 'd3dda463492256732d3dda',
          'status': 'FINISHED'
        }
      );

    expect(result).toBeDefined();
    expect('204').toBe(result.code);
  });

  it('createOccurrence - should update new occurrence', async () => {
    const result = await rdo
      .withUrl('http://host.example/v1/rdo')
      .withAuthorization('14d8121463492256732')
      .withCustomer('56732d3dda14d81214634922')
      .createOccurrence(
        'd3dda463492256732d3dda',
        {
          'rdo_id': 'd3dda463492256732d3dda',
          'description': 'Example description',
          'category': 'Category Example',
          'start_time': '13:00',
          'finish_time': '13:01',
          'punctual': 'false',
        }
      );

    expect(result).toBeDefined();
    expect('200').toBe(result.code);
  });
});
