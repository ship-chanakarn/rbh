import models from '../db/models';

const showAll = async ({ offset, limit }) => {
    const lists = await models.List.findAndCountAll({
        offset,
        limit,
        include: [{
            model: models.User,
            attributes: ['name'],
          }],
    });
    return lists;
};

const showOne = async listId => {
    const list = await models.List.findByPk(listId, {
        include: [{
            model: models.User,
            attributes: ['name'],
          }],
    });
    return list;
};

const update = async (listId, body) => {
    const updatedList = await models.List.update(
        { status: body.status },
        {
            where: {id: listId }
        });
    return updatedList;
};

const create = async body => {
    const list = await models.List.create(body);
    return list;
};

const remove = async listId => {
    const list = await models.List.destroy({
        where: { id: listId },
    });
};


export default {
    showAll,
    showOne,
    update,
    create,
    remove,
};

