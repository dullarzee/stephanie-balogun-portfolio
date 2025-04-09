// Update the categories section in your work page
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
  {categories.map((category, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
      className="relative group"
    >
      <Link 
        href={`/work/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
        className="block w-full text-left p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-turquoise/50 transition-all duration-300"
      >
        <h3 className="font-serif text-xl mb-2 text-turquoise">{category.name}</h3>
        <p className="text-white/70 mb-4">{category.count} Projects</p>
        <ArrowRight className="h-5 w-5 text-turquoise transform group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </motion.div>
  ))}
</div>