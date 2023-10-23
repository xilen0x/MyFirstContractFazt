const TasksContract = artifacts.require("TasksContract")

contract("TasksContract", () => {
	before(async () => {
		this.tasksContract = await TasksContract.deployed()
	})

	it("migrate deployed successfully", async () => {
		const address = this.tasksContract.address
		assert.notEqual(address, "");
		assert.notEqual(address, 0x0);
		assert.notEqual(address, null);
		assert.notEqual(address, undefined);
	})

	/*it("get tasks list", async () => {
		const taskCounter = await this.tasksContract.taskCounter()
		const task = await this.tasksContract.tasks(taskCounter)

		assert.equal(task.id.toNumber(), taskCounter);
		assert.equal(task.title, "Primera tarea");
		assert.equal(task.description, "Hacer ruido en ...");
		assert.equal(task.done, false);
		assert.equal(taskCounter, 1);
	})

	it("task created successfully", async () => {
		const result = await this.tasksContract.createTask("A new task", "A new description")
		const taskCounter = await this.tasksContract.taskCounter()
		assert.equal(taskCounter, 2)
		const event = result.logs[0].args
		assert.equal(event.id.toNumber(), 2)
		assert.equal(event.title, "A new task")
		assert.equal(event.description, "A new description")
		assert.equal(event.done, false)
	})

	it("task toggled successfully", async () => {
		const result = await this.tasksContract.toggleDone(1)
		const task = await this.tasksContract.tasks(1)
		assert.equal(task.done, true)
		const event = result.logs[0].args
		assert.equal(event.id.toNumber(), 1)
		assert.equal(event.done, true)
	})*/
})