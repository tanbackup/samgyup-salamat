import mongoose from 'mongoose'

const LeaveTypeSchema = mongoose.Schema(
	{
		name: {
			type: String,
			default: ''
		},
		payed: {
			type: Boolean,
			default: false
		},
		created: {
			type: String,
			default: ''
		},
		updated: {
			type: String,
			default: ''
		}
	},
	{ timestamps: true }
)

const LeaveTypes = mongoose.models.LeaveTypes || mongoose.model('LeaveTypes', LeaveTypeSchema)

export default LeaveTypes
