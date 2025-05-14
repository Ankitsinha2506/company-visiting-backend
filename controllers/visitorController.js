const Visitor = require("../models/VisitorModel");
const visitorValidation = require("../validations/visitorValidation");


// Create Visitor Controller.
const createVisitor = async (req, res) => {
    try {
      const visitor = new Visitor(req.body);
      await visitor.save();
  
      // ✅ Only ONE response
      return res.status(201).json({
        success: true,
        message: 'Visitor created successfully',
        data: visitor,
      });
  
    } catch (error) {
      console.error('Error creating visitor:', error.message);
  
      // ✅ Only ONE response in catch
      return res.status(500).json({
        success: false,
        message: 'Failed to create visitor',
        error: error.message,
      });
    }
  };

// Get All Visitors Controller.
const getAllVisitors = async (req, res) => {
    try {
        const visitors = await Visitor.find().sort({ createdAt: -1 });
        if (!visitors || visitors.length === 0) {
            return res.status(404).json({ message: 'No visitors found' });
        }
        res.status(200).json({ message: 'Visitors fetched successfully', visitors });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
        console.log("Internal server error", error);
    }
}

// Get Visitor By ID Controller.
const getVisitorById = async (req, res) => {
    try {
      const visitor = await Visitor.findById(req.params.id);
  
      if (!visitor) {
        return res.status(404).json({ success: false, message: 'Visitor not found' });
      }
  
      return res.status(200).json({ success: true, data: visitor });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Error fetching visitor', error: error.message });
    }
  };
// Update Visitor Controller.
const updateVisitor = async (req, res) => {
    try {
        const updatedVisitor = await Visitor.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        if (!updatedVisitor) {
            return res.status(404).json({ message: 'Visitor not found' });
        }
        res.status(200).json({ message: 'Visitor updated successfully', updatedVisitor });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
        console.log("Internal server error", error);
    }
}

// Delete Visitor Controller.
const deleteVisitor = async (req, res) => {
    try {
        const deletedVisitor = await Visitor.findByIdAndDelete(req.params.id);
        if (!deletedVisitor) {
            return res.status(404).json({ message: 'Visitor not found' });
        }
        res.status(200).json({ message: 'Visitor deleted successfully', deletedVisitor });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
        console.log("Internal server error", error);
    }
}

// Export Visitor Controller.
module.exports = {
    createVisitor,
    getAllVisitors,
    getVisitorById,
    updateVisitor,
    deleteVisitor
}