import models from '../db/models';

const showByListId = async (listId, { offset, limit }) => {
    const comments = await models.Comment.findAndCountAll({
        offset,
        limit,
        where: { listId },
        include: [{
            model: models.User,
            attributes: ['name'],
          }],
    });
    return comments;
};

const create = async body => {
    const comments = await models.Comment.create(body);
    return comments;

}
export default {
    showByListId,
    create,
}
