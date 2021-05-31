module.exports = mongoose => {
    const Email = mongoose.model(
      "email",
      mongoose.Schema(
        {
          userEmail: String
        },
        { timestamps: true }
      )
    );
  
    return Email;
  };