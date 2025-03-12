module.exports = function (faber) {
  faber.setActions((data) => {
    return [
      // Replace placeholders in README.md
      {
        type: "replace",
        files: "_README.md",
        from: ["PLACEHOLDER_NAME", "PLACEHOLDER_AUTHOR"],
        to: [data.name, data.author],
      },
      // Rename _README.md to README.md (overriding the default README.md)
      {
        type: "move",
        from: "_README.md",
        to: "README.md",
      },
    ];
  });
};
